import { useEffect, useCallback } from "react";

const MyComponent = () => {
  const filterPastNext = useCallback(() => {
    async () => {}
  }, [/* ithe sarva tujhe dependencies */]);

  useEffect(() => {
    filterPastNext();
  }, [filterPastNext]);

}

export default MyComponent;





