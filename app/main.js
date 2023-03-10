let container = document.querySelector(".container");
let btns = document.querySelectorAll(".btn");
let toastDetails = {
  time: 6000,
  Success: {
    icon: "fa-solid fa-circle-check",
    title: "Success",
    text: "This is a success toast!!!",
  },
  Error: {
    icon: "fa-solid fa-triangle-exclamation",
    title: "Error",
    text: "This is a error toast!!!",
  },
  Infor: {
    icon: "fa-solid fa-circle-info",
    title: "Infor",
    text: "This is a infor toast!!!",
  },
  Warning: {
    icon: "fa-solid fa-circle-radiation",
    title: "Waring",
    text: "This is a warning toast!!!",
  },
};
let removeToast = (toast) => {
    if(toast.timeId){clearTimeout(toast.timeId)};
  toast.classList.add("hidden");
  setTimeout(() => {
    toast.remove();
  }, 1000);
  //xoa toast khỏi DOM sau 1s
};

let createToast = function (id) {
  let { icon, text, title } = toastDetails[id];
  let toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__text">
                        <h4 class="toast__title">${title}</h4>
                        <p class="toast__desc">${text}</p>
                    </div>
                    <div class="icon__close">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </div>`;

  container.appendChild(toast);
  toast.timeId = setTimeout(() => {
    removeToast(toast);
  }, toastDetails.time);
};

btns.forEach((value) => {
  value.addEventListener("click", () => {
    createToast(value.id);
  });
});
