# IT23139244

ITPM playwright assignment





\# Singlish to Sinhala/Tamil Transliteration Testing Framework



!\[Playwright](https://img.shields.io/badge/Playwright-2.4.0-blue)

!\[TypeScript](https://img.shields.io/badge/TypeScript-5.0-green)

!\[Testing](https://img.shields.io/badge/Testing-Automated-red)



&nbsp;📋 Overview



This repository contains an automated testing framework for the \*\*Swift Translator\*\* application - a web-based tool that transliterates Singlish/Thanglish text into Sinhala and Tamil scripts. The framework uses Playwright for end-to-end testing and includes comprehensive test cases covering functional, UI, and edge-case scenarios.



&nbsp;🎯 Purpose



To ensure the quality and reliability of the transliteration application by:

\- Validating accurate conversion of Singlish text to Sinhala/Tamil

\- Testing various linguistic scenarios (tenses, questions, commands, etc.)

\- Verifying UI functionality and responsiveness

\- Identifying edge cases and error handling capabilities



&nbsp;🏗️ Project Structure



```

transliteration-tests/

├── tests/

│   └── transliteration.spec.ts    # Main test file with all test cases

├── playwright.config.ts           # Playwright configuration

├── package.json                   # Dependencies and scripts

├── tsconfig.json                  # TypeScript configuration

└── README.md                      # This file

```



&nbsp;🚀 Getting Started

&nbsp;Prerequisites



\- Node.js (v14 or higher)

\- npm or yarn



&nbsp;Installation



1\. Clone the repository:

```bash

git clone <your-repository-url>

cd transliteration-tests

```



2\. Install dependencies:

```bash

npm install

\# or

yarn install

```



3\. Install Playwright browsers:

```bash

npx playwright install

```



&nbsp;Running Tests



\*\*Run all tests:\*\*

```bash

npm test

\# or

yarn test

```



\*\*Run tests in headed mode (to see the browser):\*\*

```bash

npm run test:headed

\# or

yarn test:headed

```



\*\*Run tests on specific browsers:\*\*

```bash

npx playwright test --project=chromium

npx playwright test --project=firefox

npx playwright test --project=webkit

```



\*\*Generate test report:\*\*

```bash

npm run report

\# or

yarn report

```



📊 Test Categories



&nbsp;1. \*\*Positive Functional Tests\*\* (`Pos\_Fun\_xxxx`)

\- Simple daily sentences

\- Complex sentences with conditional logic

\- Tense variations (past, present, future)

\- Interrogative and imperative forms

\- Mixed English + Singlish content

\- Politeness levels and formality

\- Currency, time, and number formats



&nbsp;2. \*\*Negative Functional Tests\*\* (`Neg\_Fun\_xxxx`)

\- Typographical errors and misspellings

\- Joined words without spaces

\- Chat shorthand and abbreviations

\- Special characters and emojis

\- Excessive English content

\- Unusual formatting



&nbsp;3. \*\*UI Tests\*\* (`Pos\_UI\_xxxx`, `Neg\_UI\_xxxx`)

\- Copy-paste functionality

\- Input field behavior

\- Real-time transliteration

\- Error message display

\- Responsive design



&nbsp;🔍 Test Case Structure



Each test case follows this pattern:



```typescript

test('Test\_ID: Test Description', async ({ page }) => {

&nbsp; await page.goto('https://www.swifttranslator.com/');

&nbsp; 

&nbsp; const input = 'Singlish input text';

&nbsp; const expectedOutput = 'Expected Sinhala output';

&nbsp; 

&nbsp; // Interact with UI

&nbsp; const inputField = page.locator('textarea\[placeholder="Input Your Singlish Text Here."]');

&nbsp; await inputField.fill(input);

&nbsp; await page.waitForTimeout(1000);

&nbsp; 

&nbsp; // Verify output

&nbsp; const outputLabel = page.locator('text=Sinhala');

&nbsp; const outputField = outputLabel.locator('xpath=following-sibling::\*\[1]');

&nbsp; await expect(outputField).not.toHaveText('', { timeout: 5000 });

&nbsp; 

&nbsp; const actualOutput = await outputField.textContent();

&nbsp; expect(actualOutput?.trim()).toContain(expectedOutput);

});

```



&nbsp;📝 Test Data Source



Test cases are based on a comprehensive test plan spreadsheet that includes:



| Column | Description |

|--------|-------------|

| TC ID | Unique test case identifier |

| Test Case Name | Descriptive name of the test scenario |

| Input Length Type | S (≤30 chars), M (31-299 chars), L (≥300 chars) |

| Input | Singlish/Thanglish input text |

| Expected Output | Expected Sinhala/Tamil output |

| Status | Pass/Fail status |

| Coverage | What is being tested |



&nbsp;🧪 Test Coverage Areas







&nbsp;Linguistic Features

\- ✅ Sentence structures (simple, compound, complex)

\- ✅ Tense variations (past, present, future)

\- ✅ Interrogative and imperative forms

\- ✅ Positive vs negative sentences

\- ✅ Politeness levels (formal vs informal)

\- ✅ Pronoun variations (singular/plural)

\- ✅ Negation patterns



&nbsp;Content Types

\- ✅ Daily conversations and greetings

\- ✅ Mixed language content (English + Singlish)

\- ✅ Technical terms and brand names

\- ✅ Numbers, dates, and currency

\- ✅ Abbreviations and acronyms



&nbsp;Edge Cases

\- ✅ Formatting (spaces, line breaks, paragraphs)

\- ✅ Typographical errors

\- ✅ Unusual character combinations

\- ✅ Boundary conditions (short/long inputs)

\- ✅ Error scenarios



&nbsp;⚙️ Configuration



&nbsp;Playwright Configuration (`playwright.config.ts`)

\- Test timeout: 10 seconds

\- Retry attempts: 2

\- Browsers: Chromium, Firefox, WebKit

\- Headless mode by default

\- Viewport: 1280x720

&nbsp;Test Timeouts

\- Global timeout: 10 seconds

\- Individual test wait time: 1-2 seconds

\- Output verification timeout: 5 seconds



&nbsp;📈 Test Results



&nbsp;Viewing Reports

After test execution, view the HTML report:

```bash

npx playwright show-report

```



&nbsp;Interpreting Results

\- ✅ Green: Test passed

\- ❌ Red: Test failed

\- ⏸️ Yellow: Test skipped

\- ⏱️ Blue: Test timed out



&nbsp;🔧 Maintenance



&nbsp;Adding New Test Cases

1\. Follow the existing test structure

2\. Use appropriate test naming convention:

&nbsp;  - `Pos\_Fun\_xxxx` for positive functional tests

&nbsp;  - `Neg\_Fun\_xxxx` for negative functional tests

&nbsp;  - `Pos\_UI\_xxxx` for positive UI tests

&nbsp;  - `Neg\_UI\_xxxx` for negative UI tests



3\. Include proper assertions:

&nbsp;  - Positive tests: `expect().toContain()`

&nbsp;  - Negative tests: `expect().not.toBe()`



&nbsp;Updating Test Data

Test data can be updated in the `transliteration.spec.ts` file by modifying the `input` and `expectedOutput` variables for each test case.



&nbsp;🤝 Contributing



1\. Fork the repository

2\. Create a feature branch (`git checkout -b feature/new-tests`)

3\. Add your test cases following existing patterns

4\. Commit changes (`git commit -m 'Add new test scenarios'`)

5\. Push to branch (`git push origin feature/new-tests`)

6\. Open a Pull Request



&nbsp;📋 Quality Standards



\- All tests must be independent and not rely on other tests

\- Use descriptive test names that explain the scenario

\- Include appropriate wait times for asynchronous operations

\- Handle both positive and negative scenarios

\- Document any known issues or limitations



&nbsp;🚨 Troubleshooting



&nbsp;Common Issues



1\. \*\*Tests failing due to timeout\*\*

&nbsp;  - Increase timeout in `test.setTimeout()`

&nbsp;  - Check network connectivity to the target application



2\. \*\*Element not found errors\*\*

&nbsp;  - Verify CSS selectors haven't changed

&nbsp;  - Check if the application UI has been updated



3\. \*\*Inconsistent test results\*\*

&nbsp;  - Add longer wait times for complex transliterations

&nbsp;  - Consider network latency



4\. \*\*Browser-specific issues\*\*

&nbsp;  - Run tests on different browsers

&nbsp;  - Check browser compatibility



&nbsp;Debugging Tips

\- Run tests in headed mode to observe behavior

\- Use `page.pause()` to pause execution (temporarily)

\- Add console logs for debugging: `console.log('Debug:', variable)`

\- Use Playwright's trace viewer: `npx playwright show-trace trace.zip`



&nbsp;📚 Resources



\- \[Playwright Documentation](https://playwright.dev/docs/intro)

\- \[TypeScript Documentation](https://www.typescriptlang.org/docs/)

\- \[Singlish to Sinhala Transliteration Guide](https://www.swifttranslator.com/help)



&nbsp;📄 License



This project is licensed under the MIT License - see the LICENSE file for details.

&nbsp;📧 Contact



For questions or support:

\- Repository: \[Your GitHub Repository URL]

\- Issues: \[GitHub Issues Page]

\- Email: \[Your Email]



---





