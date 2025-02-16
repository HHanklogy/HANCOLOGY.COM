$(document).on('turbolinks:load', function () {
    const observer = lozad();
    observer.observe();
  })
  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
  document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
})
// ///////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // منع النقر بزر الفأرة الأيمن على الصفحة بالكامل
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // منع سحب الصور
  document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });

  // تعطيل اختصارات F12 و Ctrl+U و Ctrl+Shift+I
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.key === "u") || 
        (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.preventDefault();
      alert("تم تعطيل عرض المصدر لحماية المحتوى!");
    }
  });
});