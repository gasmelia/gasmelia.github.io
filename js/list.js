document.addEventListener('DOMContentLoaded', () => {
    const reposList = document.getElementById('repos');
    const username = 'gasmelia'; // Cambia esto por tu nombre de usuario de GitHub
    const reposToShow = ['terra-minikube-nginx-lab']; // Cambia esto por los nombres de los repos que deseas mostrar

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const filteredRepos = data.filter(repo => reposToShow.includes(repo.name));

            filteredRepos.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || 'Sin descripción'}`;
                reposList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los repositorios:', error);
        });
});



