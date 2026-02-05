import Link from "next/link";
import StepCard, { type Step } from "./components/StepCard";

const steps: Step[] = [
  {
    title: "Verify prerequisites",
    description:
      "Install the recommended drivers, firmware utilities, and Python 3.11+. This ensures the Clawbot CLI can talk to the robot brain over USB without driver conflicts.",
    command:
      "# Windows (PowerShell)\nwinget install --id Python.Python.3.11 --source winget\nwinget install --id Zadig.Zadig --source winget\n\n# macOS (Homebrew)\nbrew install python@3.11 libusb\n\n# Ubuntu/Debian\nsudo apt update && sudo apt install python3.11 python3.11-venv libusb-1.0-0-dev"
  },
  {
    title: "Download Clawbot Control Suite",
    description:
      "Grab the official release archive and extract it into `C:\\Clawbot` (Windows) or `~/clawbot` (macOS/Linux). Replace the URL below with the latest release tag when a new version ships.",
    command:
      "mkdir -p ~/clawbot && cd ~/clawbot\ncurl -LO https://downloads.clawbot.io/releases/clawbot-suite-2.4.1.zip\nunzip clawbot-suite-2.4.1.zip"
  },
  {
    title: "Create an isolated environment",
    description:
      "Inside the suite folder, create a Python virtual environment so the Clawbot packages and tooling stay sandboxed from your system Python installs.",
    command:
      "cd ~/clawbot\npython3.11 -m venv .venv\nsource .venv/bin/activate\npip install --upgrade pip"
  },
  {
    title: "Install firmware tools and CLI",
    description:
      "Use `pip` to install the control stack, firmware uploader, and the USB bridge service that runs in the background when you plug the robot in.",
    command:
      "pip install -r requirements.txt\npip install ."
  },
  {
    title: "Flash the robot brain",
    description:
      "Connect the Clawbot brain via USB, then run the provisioning script. The tool validates firmware signatures before flashing, and stores a backup in the `/backups` folder by default.",
    command:
      "python tools/provision.py --device auto --backup ./backups/$(date +%Y%m%d-%H%M%S).bin"
  },
  {
    title: "Start the desktop dashboard",
    description:
      "Launch the dashboard to control joints, tune PID loops, and send autonomous scripts. The dashboard auto-discovers robots on USB and Wi-Fi.",
    command:
      "npm install --global clawbot-dashboard\nclawbot-dashboard"
  },
  {
    title: "Run diagnostics",
    description:
      "Validate sensor readings, calibration, and battery health before your first drive session. Keep the robot on blocks so the wheels can spin freely during the test.",
    command:
      "clawbot diag run --full"
  }
];

const Page = () => (
  <main>
    <div className="container">
      <header>
        <h1>Install Clawbot on Your PC</h1>
        <p className="lead">
          Follow these curated steps to configure firmware drivers, install the desktop dashboard, and verify your Clawbot robot is ready to roll.
        </p>
      </header>

      <section className="section">
        <h2>Guided Setup</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <StepCard step={step} index={index} key={step.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Common Issues & Fixes</h2>
        <p>
          USB connection failing? Try a different data-rated cable and confirm the device appears as <code>Clawbot Interface</code> in the device manager. Firmware flash timing out? Hold the reset button for three seconds, release, then rerun the flash command while the status LED is blinking blue.
        </p>
        <p>
          You can re-run <code>clawbot diag run --usb</code> to ensure the bridge service is healthy. For flaky Wi-Fi discovery, ensure UDP port 35565 is open on your firewall.
        </p>
      </section>

      <section className="section">
        <h2>Helpful Resources</h2>
        <div className="resources">
          <Link href="https://docs.clawbot.io/getting-started" target="_blank" rel="noopener noreferrer">
            Installation docs &mdash; docs.clawbot.io/getting-started
          </Link>
          <Link href="https://docs.clawbot.io/dashboard" target="_blank" rel="noopener noreferrer">
            Dashboard manual &mdash; docs.clawbot.io/dashboard
          </Link>
          <Link href="https://support.clawbot.io" target="_blank" rel="noopener noreferrer">
            Support portal &mdash; support.clawbot.io
          </Link>
        </div>
      </section>
    </div>
    <footer>Ready to deploy? Launch the dashboard and take the Clawbot for a spin.</footer>
  </main>
);

export default Page;
