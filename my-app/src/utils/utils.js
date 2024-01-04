export const listCreationAPI = async () => {
    try {
        const response = await fetch(
          "https://apis.ccbp.in/list-creation/lists",
          {
            method: "GET",
            
          }
        );
        const result = await response.json();
        if (response.ok) {
          return result;
        } else {
          return null;
        }
      } catch (err) {
        return null;
      }
}