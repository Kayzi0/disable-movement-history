Hooks.once("init", () => {
  CONFIG.Token.documentClass.prototype._shouldRecordMovementHistory = () =>
    false;
});
