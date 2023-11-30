export async function fetchData() {
  try {
      const response = await fetch(
        'https://api.jsonbin.io/v3/b/656689de54105e766fd6e8ee',
          {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'X-Master-Key': '$2a$10$kUIuVuSbZI3sV/IFOobrteTWsne/.1Bd/nWHU.zFSwP2BhGzy62JO',
              },
          }
      );
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}


// export async function sendDataToJsonBin(data) {
//     const response = await fetch(
//         https://api.jsonbin.io/v3/b/6555f2b712a5d376599a3eff,
//         {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-Master-Key":
//                     "$2a$10$k9ZU.RdKDhJKc1mSZbYAquTuoot3czlNcCThcZWMl.H82OUpkPhlC",
//             },
//             body: JSON.stringify(data),
//         }
//     );

//     if (!response.ok) {
//         throw new Error(
//             Failed to send data to jsonbin.io. Status: ${response.status}
//         );
//     }
// }