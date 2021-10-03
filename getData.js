import axios from "axios";

const getData = function (number) {
      return new Promise(async (resolve, reject) => {
            const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
            const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

            const allData = [user, posts[1]];
            console.log(allData);
      });
};

export default getData;
