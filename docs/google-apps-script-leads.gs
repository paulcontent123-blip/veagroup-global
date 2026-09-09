/**
 * Nhận POST từ /api/leads của Next.js và ghi 1 hàng vào sheet đang active.
 * Deploy: Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Thời gian", "Nguồn", "Họ tên/Công ty", "Email", "SĐT", "Loại hợp tác", "Nội dung"]);
    }

    sheet.appendRow([
      new Date(),
      data.source || "",
      data.name || "",
      data.email || "",
      data.phone || "",
      data.type || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
