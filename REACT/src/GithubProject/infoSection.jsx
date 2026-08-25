function InfoSection({ totalCount = 0 }) {
    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                alignItems: "center"
            }}
        >
            <b style={{ fontSize: "28px" }}>
                {totalCount.toLocaleString()}
            </b>

            <span
                style={{
                    fontSize: "14px",
                    marginLeft: "10px"
                }}
            >
                User Results
            </span>
        </div>
    );
}

export default InfoSection;