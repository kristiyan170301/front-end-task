# Registration Form Injection Challenge (Frontend)

## Goal

Transform a minimal registration form into a polished, interactive, API-driven experience - **using JavaScript injection only**. You may NOT edit the provided base files (`registration-form/index.html`, `registration-form/styles.css`, `public/main.js`) directly. All of your work must be done in seperate javascript files in the js-injection directory, which you can load in the base script.

Your injected UI must be responsive and work smoothly on both **mobile** and **desktop** devices.


---

## Requirements

### 1) Dynamic Fields & Validation

- **Username availability (debounced):**

  - Add inline validation below the username field.
  - On idle pause (e.g., 400–600ms), check availability via `https://jsonplaceholder.typicode.com/users`.
  - If the exact username exists (case-insensitive), show a red “taken” state; otherwise show a green “available” state.

- **Password strength meter (live):**

  - Inject a strength meter (bar + text).
  - Rules:
    - Weak: < 6 chars
    - Medium: ≥ 8 chars AND includes letters + numbers
    - Strong: ≥ 10 chars AND includes letters + numbers + symbols AND contains at least one uppercase + one lowercase
  - Live checklist of unmet rules.

- **Confirm password:**

  - Inject a “Confirm Password” field and show ✅/❌ match state in real time.

- **Email validation via MutationObserver:**

  - Observe the email input’s validity; show/hide an inline warning whenever it becomes invalid/valid (don’t rely only on `input` events).

- **Username character counter:**
  - Inject a counter that updates live (e.g., `12/24`), and warn at max length (24).

### 2) API Data & UI (Inject Only)

- **Country and State/Province selects:**

  - Countries: `https://restcountries.com/v3.1/all`
  - States/Provinces: `https://countriesnow.space/api/v0.1/countries/states` (POST; body with `{ country: "<name>" }`)
  - Inject a **Country** select under Email.
  - On country change:
    - Populate **State/Province** select (or show “No states available”).
    - Inject a compact country info box: flag, region, population (formatted).

### 3) UX Enhancements (Inject Only)

- **Terms & Conditions:**

  - Add a custom checkbox + label (with a link). Submission blocked until accepted.

- **Tooltips:**

  - Inject tooltips for labels (e.g., username rules). You decide hover vs. click behavior.

- **Loading states & animations:**
  - Add a small spinner component for async loads (countries, states, submit).
  - Add subtle transitions (CSS) for injected elements.

### 4) Submission Workflow

- **Validation gates (must pass):**

  - Username available
  - Email valid
  - Password strength Medium or Strong
  - Passwords match
  - Terms accepted
  - Country selected

- **Submit handling:**
  - POST to `https://jsonplaceholder.typicode.com/posts` with JSON body:
    ```json
    {
      "username": "...",
      "email": "...",
      "country": "...",
      "state": "...",
      "passwordStrength": "Weak|Medium|Strong"
    }
    ```
  - Show spinner while submitting.
  - On success: render a green success card with returned `id`, then reset form & injected UI.
  - On failure: render a red error card with retry guidance.

### 5) Constraints & Quality

- **Do not modify base files.** Inject via `custom.js` only.
- Write **modular, readable** code (helpers, clear functions).
- Avoid global leaks; scope responsibly.
- Handle network failures gracefully (retries or clear user feedback).
- Keep the UI professional, responsive, and accessible (labels, ARIA hints where relevant).
- Must be fully usable on both **mobile** and **desktop**.

### 6) Bonus Ideas (Optional)

- Persist last chosen country/state to `localStorage` and restore on load.
- Keyboard accessibility in tooltips & injected selects.
- Input masking for email/username sanitization hints.

---

## Hand-in

- Place your custom JS injection in `js-injection/*`
- No edits to `registration-form/*`.

Good luck — focus on correctness, resilience, and responsive UX.
