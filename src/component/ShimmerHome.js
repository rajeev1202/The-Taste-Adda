const ShimmerHome = () => {
    return (
        <div className="shimmer-container">
            {Array(15).fill('').map((data,index) => <div key={index} className="shimmer-card">
            </div>)}
        </div>
    )
}

export default ShimmerHome;