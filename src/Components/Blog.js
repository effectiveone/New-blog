import React, {useEffect, useState} from 'react';
import axios from 'axios';



function Blog() {


  const baseURL = "http://gruca.j.pl/wp-json/wp/v2/posts";
  const [postz, setPostz] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    axios.get(baseURL).then((response) => {
        setPostz(response.data);
    }).then( () => {
      setIsLoading(false);
    });
  }, []);

  if (!postz) return null;
  return (
    <div className={liStyle} >
      {
      isLoading ? (<p>ładuje się strona..</p>) :
      postz.map((postz) => 
      <div key={postz.id} className={liStyle}>
    <a href={postz.link}><p>{postz.title.rendered}</p></a>  
</div>
     )}
    </div>
  );
}
const liStyle = {color : 'white !important', fontSize:'12px', display: 'flex' };


export default Blog;