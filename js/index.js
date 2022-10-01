const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  let uri = '  http://localhost:3000/posts?_sort=likes&_order=desc';

  if(term) uri+= `&q=${term}`;

  const response = await fetch(uri);
  const posts = await response.json();

  let template = '';
  
  posts.forEach(post => {
    const { title, likes, id } = post;
    let { body } = post;
    body = body.slice(0, 200);

    template += `
      <div class="post">
        <h2>${title}</h2>
        <p><small>${likes} likes</small></p>
        <p>${body}</p>
        <a href="/details.html?id=${id}">Read more</a>
      </div>
    `;
  });

  container.innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());