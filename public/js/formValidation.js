function sendingAnimation() {
  let overlay = document.getElementById("overlay");
  overlay.classList.add("show");
}

function closeFlash() {
  let flash = document.getElementById("flash");
  flash.classList.remove("show");
}

window.contactForm = () => {
  Iodine.setErrorMessages({
    numeric: `Please enter a valid phone number`,
    required: `This field is required`,
    email: `Please enter a valid Email`,
    minimum: `Phone number must be atleast 10 digits`,
  });
  return {
    name: { errorMessage: "", blurred: false },
    mail: { errorMessage: "", blurred: false },
    number: { errorMessage: "", blurred: false },

    blur: function (event) {
      let ele = event.target;
      this[ele.name].blurred = true;
      let rules = JSON.parse(ele.dataset.rules);
      this[ele.name].errorMessage = this.getErrorMessage(ele.value, rules);
    },
    input: function (event) {
      let ele = event.target;
      let rules = JSON.parse(ele.dataset.rules);
      this[ele.name].errorMessage = this.getErrorMessage(ele.value, rules);
    },
    submit: function (event) {
      let inputs = [...this.$el.querySelectorAll("input[data-rules]")];
      inputs.map((input) => {
        if (Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true) {
          event.preventDefault();
        }
      });
    },

    getErrorMessage: function (value, rules) {
      let isValid = Iodine.is(value, rules);
      if (isValid !== true) {
        return Iodine.getErrorMessage(isValid);
      }
      return "";
    },
  };
};

window.buyForm = () => {
  Iodine.setErrorMessages({
    numeric: `Please enter a valid phone number`,
    required: `This field is required`,
    email: `Please enter a valid Email`,
    minimum: `Phone number must be atleast 10 digits`,
    maximum: `Please enter valid pin code`,
  });
  return {
    name: { errorMessage: "", blurred: false },
    mail: { errorMessage: "", blurred: false },
    number: { errorMessage: "", blurred: false },
    pincode: { errorMessage: "", blurred: false },
    city: { errorMessage: "", blurred: false },

    blur: function (event) {
      let ele = event.target;
      this[ele.name].blurred = true;
      let rules = JSON.parse(ele.dataset.rules);
      this[ele.name].errorMessage = this.getErrorMessage(ele.value, rules);
    },
    input: function (event) {
      let ele = event.target;
      let rules = JSON.parse(ele.dataset.rules);
      this[ele.name].errorMessage = this.getErrorMessage(ele.value, rules);
    },
    submit: function (event) {
      let inputs = [...this.$el.querySelectorAll("input[data-rules]")];
      inputs.map((input) => {
        if (Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true) {
          event.preventDefault();
        }
      });
    },

    getErrorMessage: function (value, rules) {
      let isValid = Iodine.is(value, rules);
      if (isValid !== true) {
        return Iodine.getErrorMessage(isValid);
      }
      return "";
    },
  };
};
