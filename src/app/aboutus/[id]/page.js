import teamMember from "../teamMember";

function DeveloperPage({ params }) {
  const id = params.id;
  const member = teamMember.find((member) => member.id === parseInt(id));

  if (!member) {
    return <div>Developer doesn't exist</div>;
  }
  console.log(id);
  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}

export default DeveloperPage;
