
// جلب عناصر الأيقونة والقائمة
const whatsappIcon = document.getElementById("whatsapp-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const closeButton = document.getElementById("close-dropdown");

// إضافة حدث الضغط لإظهار/إخفاء القائمة
whatsappIcon.addEventListener("click", (e) => {
  e.preventDefault(); // منع السلوك الافتراضي للرابط
  // التبديل بين إظهار/إخفاء القائمة
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
    dropdownMenu.classList.remove("show");
  } else {
    dropdownMenu.style.display = "block";
    dropdownMenu.classList.add("show");
  }
});
// إغلاق الـ dropdown عند النقر في أي مكان خارج الـ dropdown
document.addEventListener("click", (e) => {
  if (!whatsappIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
    dropdownMenu.classList.remove("show");
  }
});

