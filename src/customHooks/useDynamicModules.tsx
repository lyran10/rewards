
import React, { useEffect, useState } from 'react'

type Props = {
  library : string
}

const useDynamicModules = ({ library }: Props) => {
    const [module, setModule] = useState<any>(null);

    useEffect(() => {
      if(library === "react-apexcharts"){
        import("react-apexcharts").then((mod) => {
          setModule(() => mod.default);
        });
      }

      if(library === "ckeditor5"){
        import("@ckeditor/ckeditor5-build-classic").then((mod) => {
          setModule(() => mod.default);
        });
      }

    }, []);


    return module 
}
export default useDynamicModules