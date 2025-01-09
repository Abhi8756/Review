const reviews = [
    {
        name: "Susan Smith",
        position: "Web Developer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nihil obcaecati, suscipit quisquam architecto fuga iure dolorem, pariatur maxime nemo dolores assumenda sequi ratione iusto culpa aliquid corrupti impedit unde."
    },
    {
        name: "John Doe",
        position: "Software Engineer",
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        name: "Jane Doe",
        position: "Project Manager",
        review: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
];

let currentIndex = 0;

const left = document.querySelector('#left');
const right = document.querySelector('#right');

const updateReview = (index) => {
    document.querySelector('#name').textContent = reviews[index].name;
    document.querySelector('#position').textContent = reviews[index].position;
    document.querySelector('#rev').textContent = reviews[index].review;
};

left.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
    updateReview(currentIndex);
});

right.addEventListener('click', () => {
    currentIndex = (currentIndex === reviews.length - 1) ? 0 : currentIndex + 1;
    updateReview(currentIndex);
});

// Initialize with the first review
updateReview(currentIndex);

// Random review
let random=document.querySelector('#surprise');
random.addEventListener('click',()=>{
    currentIndex=Math.floor(Math.random()*reviews.length);
    updateReview(currentIndex);
})