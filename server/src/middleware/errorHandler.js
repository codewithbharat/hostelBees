const errorHandler = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
};

module.exports = errorHandler;