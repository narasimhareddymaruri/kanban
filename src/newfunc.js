const newfunc = () => {
  const uid = new ShortUniqueId();
  // toggle color

  let board = document.querySelector(".board");
  let content = board.querySelectorAll(".content");
  let board_colors = board.querySelectorAll(".content_color");

  function toggleColor(colcr_element) {
    const colors = ["modal_red", "modal_blue", "modal_green", "modal_yellow"];
    colcr_element.addEventListener("click", (e) => {
      let current_color = e.target.classList[1];

      let current_index = colors.indexOf(current_color);
      let new_color = colors[(current_index + 1) % colors.length];
      e.target.classList.add(new_color);

      e.target.classList.remove(current_color);
    });
  }

  // filter notes
  function filter_notes() {
    let color_div = document.querySelector(".colors");

    color_div.addEventListener("click", (e) => {
      let tickets = document.querySelectorAll(".content");
      const filter_color = e.target.classList[1];

      for (let i in tickets) {
        if (typeof tickets[i] == "object") {
          tickets[i].style.display =
            tickets[i].querySelector(".content_color").classList[1] !=
            filter_color
              ? "none"
              : "block";
        }
      }
    });
    color_div.addEventListener("dblclick", () => {
      let tickets = document.querySelectorAll(".content");
      for (let i in tickets) {
        if (typeof tickets[i] == "object") {
          tickets[i].style.display = "block";
        }
      }
    });
  }

  //lock and unlock
  function lock_unlock(ticket) {
    ticket.querySelector(".lock-unlock").addEventListener("click", (e) => {
      const current = e.target.classList[1];

      e.target.classList.add(current == "fa-lock" ? "fa-unlock" : "fa-lock");

      e.target.classList.remove(current);
      // if locked, content not editable
      let edit = ticket.querySelector(".content_area");

      if (current == "fa-lock") {
        edit.setAttribute("contenteditable", "true");
      } else {
        edit.setAttribute("contenteditable", "false");
      }
      // content[i].querySelector(".content_area").attributes[1].value =
      //   current == "fa-lock";
    });
  }

  // delete content
  let del = document.querySelector(".delete_card");
  del.style.color = "";

  del.addEventListener("click", () => {
    del.style.color == "red"
      ? (del.style.color = "")
      : (del.style.color = "red");
  });

  function delete_content(tkt) {
    tkt.addEventListener("click", (e) => {
      if (del.style.color == "red") {
        tkt.remove();
      }
    });
  }

  // modal creation
  let modal = document.querySelector(".modal");

  document.querySelector(".add_card").addEventListener("click", () => {
    modal.style.display = modal.style.display == "flex" ? "" : "flex";
  });

  //inside modal chnage colors of notes

  let modal_colors = document.querySelector(".modal_colors").children;
  for (let i in modal_colors) {
    if (typeof modal_colors[i] == "object") {
      modal_colors[i].addEventListener("click", (e) => {
        const modal_cont = document.querySelector(".modal_content_area");
        let current = modal_cont.classList[1];
        if (current) {
          modal_cont.classList.remove(current);
        }
        modal_cont.classList.add(e.target.classList[0]);
      });
    }
  }

  // on enter we create a new ticket
  function createTicket(ticket_text, ticket_color) {
    const content_div = document.createElement("div");
    content_div.setAttribute("class", "content");
    content_div.innerHTML = `
    <div class="content_color ${ticket_color}"></div>
    <div class="content_id">${uid()}</div>
    <div class="content_area">${ticket_text}</div>
    <div class="lock-unlock">
      <i class="fa ${"fa-lock"}" style=" font-size: 1.5rem" ></i>
    </div>
    `;

    toggleColor(content_div.querySelector(".content_color"));
    lock_unlock(content_div);

    delete_content(content_div);

    document.querySelector(".board").appendChild(content_div);
  }

  modal.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      createTicket(e.target.value, e.target.classList[1]);
      modal.style.display = "";
      e.target.value = "";
      e.target.classList.remove(e.target.classList[1]);
    }
  });

  // delete_content(board.querySelectorAll(".content"));

  let tickets = document.querySelectorAll(".content");
  for (let i = 0; i < tickets.length; i++) {
    lock_unlock(tickets[i]);
  }

  filter_notes();
};

export default newfunc;
