export function construct(list, container, itemRenderer) {
  const ListRenderer = {
    container: document.querySelector(container),
    itemRenderer: itemRenderer,
    sortBy(data) {
      console.log(data);
      list.sort((a, b) => console.log(a, b));
      if (data === "birthday") {
        // console.log(a);
        console.log();
        list.sort((a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime());
      } else if (data === "age") {
        // console.log(a);
        list.sort((a, b) => a.age - b.age);
      } else if (data === "fullName") {
        list.sort((a, b) => a.fullName.localeCompare(b.fullName));
      } else {
        list.sort((a, b) => a[data].localeCompare(b[data]));
      }
      this.render();
    },

    render() {
      this.container.innerHTML = "";
      for (const item of list) {
        const html = this.itemRenderer.render(item);
        this.container.insertAdjacentHTML("beforeend", html);
      }
    }
  };

  return ListRenderer;
}
