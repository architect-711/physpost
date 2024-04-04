import ArticleApiEndpoints from './ArticlesEndpoints';
import RootURL from './RootURL';

type ServiceEndpoints = ArticleApiEndpoints;

export default interface API {
	rootURL: RootURL;
	endpoints: ServiceEndpoints;
}
