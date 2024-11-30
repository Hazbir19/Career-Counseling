import { useEffect } from "react";

const UseTitleHook = (title) => {
  useEffect(() => {
    document.title = `${title} | Career Counseling`;
  }, [title]);
};
export default UseTitleHook;
