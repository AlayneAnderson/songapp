import useSWR from "swr";
import fetcher from "./fetcher";

//SWR is a library used for data fetching and stores it on machine & 
//works to figure out when it needs to sync the data (from an API usually)
//An Abstraction around SWR
export const useMe = () => {
    const { data, error } = useSWR('/me', fetcher)

    return {
        user: data,
        isLoading: !data && !error,
        isError: error,
    }
}

export const usePlaylist = () => {
    const { data, error } = useSWR('/playlist', fetcher)

    return {
        playlists: (data as any) || [],
        isLoading: !data && !error,
        isError: error,
    }
}