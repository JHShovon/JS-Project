// Manual  Data

/* const data = [
  {
    title: "Titlle Heading 1",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 2",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 3",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 4",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 5",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 6",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 7",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 8",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 9",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
  {
    title: "Titlle Heading 10",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.",
  },
]; */

/* 

    <div class="container">
        <ul class="card-list">
            <!-- Start Single Card -->
            <li class="card-item">
                <h4 class="card-title">Hello</h4>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, iste.</p>
            </li>
            <!-- End Single Card -->
        </ul>
    </div>

*/

// Select Item
// const cardList = document.querySelector(".card-list");

// const loadData = () => {
//   data.map((dataItem) => {
//     // console.log(dataItem);
//     const cardItem = document.createElement("div");
//     cardItem.classList.add("card-item");
//     cardItem.innerHTML = `
//     <h4 class="card-title">${dataItem.title}</h4>
//     <p class="card-text">${dataItem.text}</p>
//     `;
//     cardList.appendChild(cardItem);
//   });
// };

// loadData();

// Fetch data
console.log(window);

const fetchData = async (config) => {
  try {
    const res = await axios(config);
    // console.log(res.data);

    return res.data;
  } catch (error) {
    throw Error("Data is not Fetch");
  }
};

// Select Item
const cardList = document.querySelector(".card-list");

const loadData = async () => {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts");

  data.map((dataItem) => {
    // console.log(dataItem);
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");
    cardItem.innerHTML = `
    <h4 class="card-title">${dataItem.title}</h4>
    <p class="card-text">${dataItem.body}</p>
    `;
    cardList.appendChild(cardItem);
  });
};

loadData();
