import { useEffect } from "react";
import { Button } from "./components/ui/button"
import { supabase } from "./config/supabase"

function App() {

  const getData = async () => {
    const { data, error } = await supabase
      .from('users')
      .select()

    if (!error) {
      console.log(data);
    } else {
      console.log(error);

    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <Button>Click Here</Button>
    </>
  )
}

export default App
