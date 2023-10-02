export const MemberRenderer = {
  render(member) {
    const name = member.firstName + " " + member.lastName;

    const html = /*html*/ `
    <tr>
      <td>${name}</td>
      <td>${member.active}</td>
      <td>${member.birthday.toLocaleString("da", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })}</td>
      <td>${member.age}</td>
      <td>${member.ageGroup}</td>
      <td>${member.email}</td>
    </tr>`;
    return html;
  }
};
