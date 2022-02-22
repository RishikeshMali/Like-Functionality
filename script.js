function like()
{
    let likes = document.getElementById('totalLikes');
    let count = parseInt(likes.innerHTML);
    count++;
    likes.innerHTML= count;
}

function dislike()
{
    let likes = document.getElementById('totalLikes');
    let count = parseInt(likes.innerHTML);
    count--;
    likes.innerHTML= count;
}