class LocalState {
  disclaimerAccepted;
  languageSelected;

  constructor(disclaimerAccepted, languageSelected) {
    this.disclaimerAccepted = disclaimerAccepted;
    this.languageSelected = languageSelected;
  }
}

export default LocalState;
