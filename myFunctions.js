
function toggleDetails(btn) {
  const row = btn.closest('tr');
  const detailsRow = row.nextElementSibling;

  // إخفاء عند الضغط مرة اخرى
  if (detailsRow.style.display === "table-row") {
      detailsRow.style.display = "none";
      btn.textContent = "عرض التفاصيل";
  } else {
    // إغلاق أي تفاصيل مفتوحة أخرى
    document.querySelectorAll(".details").forEach(r => r.style.display = "none");
    document.querySelectorAll(".details-btn").forEach(b => b.textContent = "عرض التفاصيل");

    // فتح التفاصيل الحالية
    detailsRow.style.display = "table-row";
    btn.textContent = "إخفاء التفاصيل";
  }
}


