const Api = {
    sendSignUp(data: any) {
        return new Promise<boolean>((resolve) => {
            console.group('send data to registration');
            console.log(data);
            console.groupEnd();
            setTimeout(resolve, 10000);
        })
    }
}

export default Api;