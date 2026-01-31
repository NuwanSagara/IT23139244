// tests/transliteration.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala/Tamil Transliteration Application', () => {
  test.setTimeout(10000); // Increase timeout for all tests

  // Test Case: Pos_Fun_0001 (from your spreadsheet)
  test('Pos_Fun_0001: Convert simple daily sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama pusthakaleta yanavaa.';
    const expectedOutput = 'මම පුස්තකලෙට යනවා.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම පුස්තකලෙට යනවා.');
  });

  // Test Case: Pos_Fun_0002 (from your spreadsheet)
  test('Pos_Fun_0002: Complex sentences', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'oyaa kaema gena nisaa, maQQ kaema genaave naee';
    const expectedOutput = 'ඔයා කැම ගෙන නිසා, මං කැම ගෙනාවෙ නෑ.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('ඔයා කැම ගෙන නිසා, මං කැම ගෙනාවෙ නෑ');
  });

  // Test Case: Pos_Fun_0003 (from your spreadsheet)
  test('Pos_Fun_0003: Convert present tense activity', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama dhaen sellam karanavaa.';
    const expectedOutput = 'මම දැන් සෙල්ලම් කරනවා.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම දැන් සෙල්ලම් කරනවා');
  });

  // Test Case: Pos_Fun_0004 (from your spreadsheet)
  test('Pos_Fun_0004: Convert past tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama iye pansal giyaa.';
    const expectedOutput = 'මම ඉයෙ පන්සල් ගියා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම ඉයෙ පන්සල් ගියා');
  });

  // Test Case: Pos_Fun_0005 (from your spreadsheet)
  test('Pos_Fun_0005: Convert future tense plan', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama heta vaeda karanavaa';
    const expectedOutput = 'මම හෙට වැඩ කරනවා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම හෙට වැඩ කරනවා');
  });

  // Test Case: Pos_Fun_0006 (from your spreadsheet)
  test('Pos_Fun_0006: Convert interrogative greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'oyaata kohomadha?';
    const expectedOutput = 'ඔයාට කොහොමද?';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('ඔයාට කොහොමද?');
  });

  // Test Case: Pos_Fun_0007 (from your spreadsheet)
  test('Pos_Fun_0007: Convert imperative command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'vahaama oya karana vaede naavaththanna !';
    const expectedOutput = 'වහාම ඔය කරන වැඩෙ නාවත්තන්න !';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('වහාම ඔය කරන වැඩෙ නාවත්තන්න !');
  });

  // Test Case: Pos_Fun_0008 (from your spreadsheet)
  test('Pos_Fun_0008: Convert plural pronoun sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'api iskoole yamu';
    const expectedOutput = 'අපි ඉස්කෝලෙ යමු';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('අපි ඉස්කෝලෙ යමු');
  });

  // Test Case: Pos_Fun_0009 (from your spreadsheet)
  test('Pos_Fun_0009: Convert polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'karunakaralaa mata podi udhavvak karanna puluvandha, Oyaa hodha kenek nisaa oyaagen ahanna hithunaa';
    const expectedOutput = 'කරුනකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද, ඔයා හොද කෙනෙක් නිසා ඔයාගෙන් අහන්න හිතුනා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('කරුනකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද');
  });

  // Test Case: Pos_Fun_0010 (from your spreadsheet)
  test('Pos_Fun_0010: Convert informal phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Oya vidhihatama vaede karapam.';
    const expectedOutput = 'ඔය විදිහටම වැඩෙ කරපම්.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('ඔය විදිහටම වැඩෙ කරපම්.');
  });

  // Test Case: Pos_Fun_0011 (from your spreadsheet)
  test('Pos_Fun_0011: Convert mixed English + Singlish', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Zoom meeting ekak  thiyana nisaa, Office ekata oyaala enna onaa nae velaavata meeting ekata add venna kattiyama';
    const expectedOutput = 'Zoom meeting එකක්  තියන නිසා, Office එකට ඔයාල එන්න ඔනා නැ වෙලාවට meeting එකට add වෙන්න කට්ටියම';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('Zoom meeting එකක්');
  });

  // Test Case: Pos_Fun_0012 (from your spreadsheet)
  test('Pos_Fun_0012: Convert place name sentence + mixed English', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'api next week Kandy yanna plan karala thiyenne oyath enavadha yanna trip eka,Train eken yanna hithan inne';
    const expectedOutput = 'අපි next week Kandy යන්න plan කරල තියෙන්නෙ ඔයත් එනවද යන්න trip එක,Train එකෙන් යන්න හිතන් ඉන්නේ';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('අපි next week Kandy යන්න plan කරල තියෙන්නෙ');
  });

  // Test Case: Pos_Fun_0013 (from your spreadsheet)
  test('Pos_Fun_0013: Convert repeated words emphasis', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'vaeradhi vaeradhi oka';
    const expectedOutput = 'වැරදි වැරදි ඔක';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('වැරදි වැරදි ඔක');
  });

  // Test Case: Pos_Fun_0014 (from your spreadsheet)
  test('Pos_Fun_0014: Convert compound sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'api issellama gedhara gihin kaema kaalaa ,chiththrapatiya balanna havasa sinamaahalata yanavaa';
    const expectedOutput = 'අපි ඉස්සෙල්ලම ගෙදර ගිහින් කැම කාලා ,චිත්ත්‍රපටිය බලන්න හවස සිනමාහලට යනවා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('අපි ඉස්සෙල්ලම ගෙඩර ගිහින් කම කල');
  });

  // Test Case: Pos_Fun_0015 (from your spreadsheet)
  test('Pos_Fun_0015: Convert complex conditional', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Oyaa enavanm oyage car ekema gedhara yanna puluvan';
    const expectedOutput = 'ඔයා එනවන්ම් ඔයගෙ car එකෙම ගෙදර යන්න පුලුවන්';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('ඔයා එනවන්ම් ඔයගෙ car එකෙම ගෙදර යන්න පුලුවන්');
  });

  // Test Case: Pos_Fun_0016 (from your spreadsheet)
  test('Pos_Fun_0016: Convert time format sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama hariyatama 9.15 veddhi ennam';
    const expectedOutput = 'මම හරියටම 9.15 වෙඩ්දි එන්නම්';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම හරියටම 9.15 වෙඩ්දි එන්නම්');
  });

  // Test Case: Pos_Fun_0017 (from your spreadsheet)
  test('Pos_Fun_0017: Convert currency sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Mata rs.5000k dhenna';
    const expectedOutput = 'මට rs.5000ක් දෙන්න';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මට rs.5000ක් දෙන්න');
  });

  // Test Case: Pos_Fun_0018 (from your spreadsheet)
  test('Pos_Fun_0018: Convert abbreviation sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama kaden card ekak gaththaa';
    const expectedOutput = 'මම කඩෙන් card එකක් ගත්තා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම කඩෙන් card එකක් ගත්තා');
  });

  // Test Case: Pos_Fun_0019 (from your spreadsheet)
  test('Pos_Fun_0019: Convert line break input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama gedhara yanavaa havas veddhi , oya enavanm kiyanna';
    const expectedOutput = 'මම ගෙදර යනවා හවස් වෙඩ්දි , ඔය එනවන්ම් කියන්න';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මම ගෙදර යනවා හවස් වෙඩ්දි');
  });

  // Test Case: Pos_Fun_0020 (from your spreadsheet)
  test('Pos_Fun_0020: Convert long paragraph', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'adha final exam eka karala ivara velaa gedhara yanna hithan inne ,next week api trip eka yanna plane karamu ,budget eka yana viyadham ekathu karala trip eka yana kattiyagen bedhamu,yanna hithan inne anuraadhapura, ehe gihin ruvanvaeli maha saeyath vaedhagenama emu.';
    const expectedOutput = 'අද final exam එක කරල ඉවර වෙලා ගෙදර යන්න හිතන් ඉන්නේ ,next week අපි trip එක යන්න plane කරමු ,budget එක යන වියදම් එකතු කරල trip එක යන කට්ටියගෙන් බෙදමු,යන්න හිතන් ඉන්නේ අනුරාදපුර, එහෙ ගිහින් රුවන්වැලි මහ සැයත් වැදගෙනම එමු.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(2000); // Longer timeout for long input

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('අද final exam එක කරල ඉවර වෙලා ගෙදර යන්න හිතන් ඉන්නේ');
  });

  // Test Case: Pos_Fun_0021 (from your spreadsheet)
  test('Pos_Fun_0021: Convert greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Suba udhaesanak vevaa!';
    const expectedOutput = 'සුබ උදැසනක් වෙවා!';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('සුබ උදැසනක් වෙවා!');
  });

  // Test Case: Pos_Fun_0022 (from your spreadsheet)
  test('Pos_Fun_0022: Convert short response', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'hari mama karannam';
    const expectedOutput = 'හරි මම කරන්නම්';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('හරි මම කරන්නම්');
  });

  // Test Case: Pos_Fun_0023 (from your spreadsheet)
  test('Pos_Fun_0023: Convert polite request sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'puluvannm oyaagava thiyena PDF eka ewanna eka loku udhavuvak';
    const expectedOutput = 'පුලුවන්න්ම් ඔයාගව තියෙන PDF එක එwඅන්න එක ලොකු උදවුවක්';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('පුලුවන්න්ම් ඔයාගව තියෙන PDF එක');
  });

  // Test Case: Pos_Fun_0024 (from your spreadsheet)
  test('Pos_Fun_0024: Convert inability statement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata oya vaede karanna baehae.';
    const expectedOutput = 'මට ඔය වැඩෙ කරන්න බැහැ.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('මට ඔය වැඩෙ කරන්න බැහැ.');
  });

  // NEGATIVE TEST CASES

  // Test Case: Neg_Fun_0001 (from your spreadsheet)
  test('Neg_Fun_0001: Joined words without spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mamagedharayanavaa';
    const expectedOutput = 'මම ගෙදර යනවා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - expect it NOT to match expected output
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0002 (from your spreadsheet)
  test('Neg_Fun_0002: Heavy spelling mistakes', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mma wdta ynnwa';
    const expectedOutput = 'මම වැඩට යනවා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - expect it NOT to match expected output
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0003 (from your spreadsheet)
  test('Neg_Fun_0003: Informal slang usage', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'adoo supiriyakma thama.';
    const expectedOutput = 'අඩෝ සුපිරියක්ම තමා.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - expect partial or incorrect conversion
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0004 (from your spreadsheet)
  test('Neg_Fun_0004: Extra spaces between words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'Api       vaeda         karamu.';
    const expectedOutput = 'අපි වැඩ කරමු';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - extra spaces might cause issues
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0005 (from your spreadsheet)
  test('Neg_Fun_0005: Special characters mixed', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mata @ovanm  kann!na bha%$';
    const expectedOutput = 'මට ඔවනම් කන්න බැහැ';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - special characters should break conversion
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0006 (from your spreadsheet)
  test('Neg_Fun_0006: Chat shorthand words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'tnx oyaa dipu hlp ekata';
    const expectedOutput = 'thanks ඔයා දිපු help එකට.';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - shorthand not supported
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0007 (from your spreadsheet)
  test('Neg_Fun_0007: English-heavy mixed sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'please send oyage report before dead line.';
    const expectedOutput = 'ඔබගෙ වර්තව අවසාන දිනට පෙර ලබා දෙන්න .';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - too much English might not convert properly
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0008 (from your spreadsheet)
  test('Neg_Fun_0008: Chat shorthand words - medium length', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'tmamaada thi yena whade hetatakaldamma eka nisaoayla ada gedara enna mnfree';
    const expectedOutput = 'මම අද තියෙන වැඩෙ හෙටට කල්දැම්ම එක නිසා ඔඅයල ගෙදර එන්න ම්න් free';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - shorthand and typos
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_0009 (from your spreadsheet)
  test('Neg_Fun_0009: Numeric-heavy input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'oyaa dipu 2 34 karala dennm';
    const expectedOutput = 'ඔයා දිපු දෙක තුන හතර කරල ඩෙන්න්ම්';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - numbers mixed with text might cause issues
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Neg_Fun_00010 (from your spreadsheet)
  test('Neg_Fun_00010: Emojis with text', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'mama 😊 hodhin innavaa';
    const expectedOutput = 'මම  හොදින් ඉන්නවා';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    // Negative test - emojis might break conversion
    expect(actualOutput?.trim()).not.toBe(expectedOutput);
  });

  // Test Case: Pos_UI_0001 (from your spreadsheet)
  test('Pos_UI_0001: Verify UI supports copy-paste input correctly', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const input = 'api heta office yanna hadhannee eka nisaa oyath office ekata enna vaeda godak thiyenavaa karanna';
    const expectedOutput = 'අපි හෙට office යන්න හදන්නේ එක නිසා ඔයත් office එකට එන්න වැඩ ගොඩක් තියෙනවා කරන්න';

    const inputField = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    
    // Simulate copy-paste by setting the value
    await inputField.fill('');
    await inputField.fill(input);
    
    await page.waitForTimeout(1000);

    const outputLabel = page.locator('text=Sinhala');
    const outputField = outputLabel.locator('xpath=following-sibling::*[1]');
    await expect(outputField).not.toHaveText('', { timeout: 5000 });
    const actualOutput = await outputField.textContent();
    expect(actualOutput?.trim()).toContain('අපි හෙට office යන්න හදන්නේ එක නිසා');
  });
});