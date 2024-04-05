import ArticleApiEndpoints from './ArticlesEndpoints';
import CustomerAPIEndpoints from './CustomerAPIEndpoints';
import RootURL from './RootURL';

type ServiceEndpoints = ArticleApiEndpoints | CustomerAPIEndpoints;

export default interface API {
	rootURL: RootURL;
	endpoints: ServiceEndpoints;
}
