const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteButton = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await res.json();

  const { title, body } = post;

  const template = `
    <h1>${title}</h1>
    <p>${body}</p>
  `;

  container.innerHTML = template;
}

deleteButton.addEventListener('click', async (e) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  });

  window.location.replace('/index.html');
});

window.addEventListener('DOMContentLoaded', () => renderDetails());