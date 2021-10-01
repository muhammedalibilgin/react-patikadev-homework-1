import axios from "axios";

const getData = async function (number) {
      const data = await axios("[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)");

      //   const { post } = await axios(
      //         `[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=${number})`
      //   );

      //   console.log(data);
      console.log(data);
};

getData();

function getComment(num) {
      return new Promise((resolve, reject) => {
            if (num == "") {
                  resolve({ text: "hiii" });
            }
            reject("hataa");
      });
}
getComment();

export default getData;
