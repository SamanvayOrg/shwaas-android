class pneumoniaRules {

    patientConfusion(txFormElements){
        if (txFormElements['patientConfusion'].answer = 'yes') {
            return {
                pageKey : "systemRecommendationRed"
            }
        } else {
            return {
                pageKey : nextPageKey(txFormElements.current)
            }
        }
    }
}