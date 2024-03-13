export function useApi(endpoint) {
    const [data, setData] = (useState < T) | (null > null);
    const [loading, setLoading] = useState < boolean > true;
    const [error, setError] = (useState < Error) | (null > null);
    const [refetchCount, setRefetchCount] = useState < number > 0;
    const refetch = () => {
        setRefetchCount(refetchCount + 1);
    };

    useEffect(() => {
        if (!endpoint) {
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    console.error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });

        // Clean up function to abort ongoing fetch when component is unmounted.
        return () => {
            controller.abort();
        };
    }, [endpoint, refetchCount]);

    return {
        data,
        loading,
        error,
        refetch,
    };
}
