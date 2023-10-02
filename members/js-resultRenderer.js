export const ResultRenderer = {
  render(result) {
    let desciplin = "";
    if (result._discipline === "backstroke") {
      desciplin = "Ryg";
    } else if (result._discipline === "breaststroke") {
      desciplin = "Bryst";
    } else if (result._discipline === "butterfly") {
      desciplin = "Butterfly";
    } else if (result._discipline === "freestyle") {
      desciplin = "Freestyle";
    } else {
      desciplin = result._discipline;
    }
    const eventType = result.isTraining ? "Træning" : result.isCompetition ? "Stævne" : "Unknown";

    const html = /*html*/ `
    <tr>
      <td>${result.date.toLocaleString("da", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })}</td>
      <td>${result.memberName}</td>
      <td>${desciplin}</td>
      <td>${eventType}</td>
      <td>${result.time}</td>
    </tr>`;
    return html;
  }
};
