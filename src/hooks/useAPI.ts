import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const get = async (route: string, config: object) => {
    const response = await axios.get(route, config)
    return response.data;
};

export const post = async (route: string, config: object) => {
    const response = await axios.get(route, config)
    return response.data;
}




// // const { isPending, error, data, isFetching } = useQuery({
// //     queryKey: ['repoData'],
// //     queryFn: () =>
// //       axios
// //         .get('https://api.github.com/repos/tannerlinsley/react-query')
// //         .then((res) => res.data),
// //   });


// export const fetchGithubUser = async () => {
//     const res = await fetch('https://api.github.com/users/kiranm27');
//     if (!res.ok) {
//         throw new Error('Network response was not ok');
//     }


//     const data = await res.json();
//     const user: TGithubUser = {
//         name: data?.name || '',
//         bio: data?.bio || '',
//     };
//     return user;
// };



