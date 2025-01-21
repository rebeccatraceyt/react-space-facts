const mockApi = {
    saveFacts: async (facts) => {
      // Simulate saving facts to a JSON file
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Facts saved:', facts);
          resolve();
        }, 1000);
      });
    },
  };
  
export default mockApi;