const logout = (req, res) => {
    try {
        res.status(200).json({message: "Logout successful"});
    } catch (error) {
        res.status(500).json({message: "Error logging out"});
    }
}

export default logout;
