import {ConfigService} from '@app/services/config.service';
import {Config} from '@app/models/app-config.model';


export class ConfigComponent {

  configService: ConfigService;
  config: Config;
  private headers: string[];

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse().subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key => `{key}: $resp.headers.get(key)}`);
      this.config = { ...resp.body };
    });
  }
}
