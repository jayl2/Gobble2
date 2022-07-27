const RestDetails = () => {
  const Restaurants = () => {
    const [rests, setRests] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
      const getRests = async () => {
        const res = await axios
          .get("http://localhost:3001/restaurants/get")
          .then((res) => {
            console.log(res.data.restaurants);
            setRests(res.data.restaurants);
          });
      };

      getRests();
    }, []);



  return <div></div>;
};

export default RestDetails
