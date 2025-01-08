
// جلب عناصر الأيقونة والقائمة
const telIcon = document.getElementById("tel-icon");
const dropdownMenu1 = document.getElementById("dropdown-menu1");
const closeButton1 = document.getElementById("close-dropdown");

// إضافة حدث الضغط لإظهار/إخفاء القائمة
telIcon.addEventListener("click", (e) => {
  e.preventDefault(); // منع السلوك الافتراضي للرابط
  // التبديل بين إظهار/إخفاء القائمة
  if (dropdownMenu1.style.display === "block") {
    dropdownMenu1.style.display = "none";
    dropdownMenu1.classList.remove("show");
  } else {
    dropdownMenu1.style.display = "block";
    dropdownMenu1.classList.add("show");
  }
});
// إغلاق الـ dropdown عند النقر في أي مكان خارج الـ dropdown
document.addEventListener("click", (e) => {
  if (!telIcon.contains(e.target) && !dropdownMenu1.contains(e.target)) {
    dropdownMenu1.style.display = "none";
    dropdownMenu1.classList.remove("show");
  }
});

// ////////////////////////////////////////////////////////////////////////////////////////

// جلب عناصر الأيقونة والقائمة
const mabIcon = document.getElementById("mab-icon");
const dropdownMenu2 = document.getElementById("dropdown-menu2");
const closeButton2 = document.getElementById("close-dropdown2");

// إضافة حدث الضغط لإظهار/إخفاء القائمة
mabIcon.addEventListener("click", (e) => {
  e.preventDefault(); // منع السلوك الافتراضي للرابط
  // التبديل بين إظهار/إخفاء القائمة
  if (dropdownMenu2.style.display === "block") {
    dropdownMenu2.style.display = "none";
    dropdownMenu2.classList.remove("show");
  } else {
    dropdownMenu2.style.display = "block";
    dropdownMenu2.classList.add("show");
  }
});
// إغلاق الـ dropdown عند النقر في أي مكان خارج الـ dropdown
document.addEventListener("click", (e) => {
  if (!mabIcon.contains(e.target) && !dropdownMenu2.contains(e.target)) {
    dropdownMenu2.style.display = "none";
    dropdownMenu2.classList.remove("show");
  }
});


