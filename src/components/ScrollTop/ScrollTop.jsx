import "./ScrollTop.scss";

export default function ScrollTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-top" onClick={scrollTop}>
      ↑
    </div>
  );
}
