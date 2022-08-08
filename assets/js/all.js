"use strict";

var editor = document.querySelector('#editor');
editor && ClassicEditor.create(editor);
$('[data-toggle="accessBtn"]').on('click', function () {
  return $('[data-target="editorContainer"]').toggle(300);
});
$('[data-toggle="userModalActionButton"]').on('click', function () {
  return $('[data-target="userModalActivity"]').toggle(300) + $('[data-toggle="userModalActionButton"]').toggleClass('rotate-180');
});

function openModal() {
  $('[data-target="modalContainer"]').removeClass('hidden') && $('[data-target="modalContainer"]').show(300) && $('body').addClass('overflow-hidden');
}

function closeModal() {
  $('[data-target="modalContainer"]').addClass('hidden') && $('[data-target="modalContainer"]').hide(300) && $('body').removeClass('overflow-hidden');
}

function openUserViewModal() {
  $('[data-target="userView"]').show(300);
}

function closeUserViewMod() {
  $('[data-target="userView"]').hide(300);
}

function openCreateAdminModal() {
  $('[data-target="createAdminModal"]').show(300);
}

function closeCreateAdminModal() {
  $('[data-target="createAdminModal"]').hide(300);
}

function openEditAdminModal() {
  $('[data-target="editAdminModal"]').show(300);
}

function closeEditAdminModal() {
  $('[data-target="editAdminModal"]').hide(300);
}

function closeModalBackDrop() {
  $('[data-target="modalContainer"]').addClass('hidden');
  $('[data-target="userView"]').hide(300);
  $('[data-target="userModalActivity"]').hide(300);
  $('[data-toggle="userModalActionButton"]').removeClass('rotate-180');
  $('[data-target="createAdminModal"]').addClass('hidden');
  $('[data-target="createAdmin"]').hide(300);
  $('[data-target="editAdminModal"]').addClass('hidden');
  $('[data-target="editAdmin"]').hide(300);
}

$('[data-toggle="openUserModalButton"]').on('click', function () {
  return openModal() + openUserViewModal();
});
$('[data-toggle="closeUserModalButton"]').on('click', function () {
  return closeModal() + closeUserViewMod();
});
$('[data-toggle="createAdminButton"]').on('click', function () {
  return openModal() + openCreateAdminModal();
});
$('[data-toggle="closeCreateAdminButton"]').on('click', function () {
  return closeModal() + closeCreateAdminModal();
});
$('[data-toggle="closeCreateAdminModalButton"]').on('click', function () {
  return closeModal() + closeCreateAdminModal();
});
$('[data-target="backdrop"]').on('click', function (e) {
  e.target === e.currentTarget && closeModalBackDrop();
});
$('[data-toggle="editAdminButton"]').on('click', function () {
  return openModal() + openEditAdminModal();
});
$('[data-toggle="closeEditAdminButton"]').on('click', function () {
  return closeModal() + closeEditAdminModal();
});
//# sourceMappingURL=all.js.map
