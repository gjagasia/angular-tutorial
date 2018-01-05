export class DeveloperService {
    public developerList: string[] = [];

    public getDevs() {
        return this.developerList;
    }

    public addDev(name: string) {
        this.developerList.push(name);
    }
}
