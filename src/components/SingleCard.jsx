import "./SingleCard.css"

function SingleCard({card, handleChoice, flipped, disabled}) {

  const handleClcik = () => {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className="card">
        <div className={flipped ? "flipped" : ""} >
            <img src={card.src} alt="card front" className="front" />
            <img src="/img/cover.png" alt="card back" className="back" onClick={handleClcik} />
        </div>
    </div>
  )
}

export default SingleCard
