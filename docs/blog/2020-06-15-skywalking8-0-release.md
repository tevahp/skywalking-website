# What’s new in SkyWalking? MeterSystem and mesh monitoring in 8.0
- Author: Sheng Wu, Hongtao Gao, and Tevah Platt. tetrate.io
- Original link, [Tetrate.io blog](https://www.tetrate.io/blog/whats-new-in-skywalking-metersystem-and-mesh-monitoring-in-8-0/)
- June 15, 2020

![](../.vuepress/public/static/blog/2020-08-03-skywalking8-1-release/apache-skywalking.jpg)

Apache SkyWalking, the observability platform and open source application performance monitor (APM) project, today announced the general availability of its 8.0 release. Known for its powerful metrics, tracing and service mesh capabilities, SkyWalking extends its functionality with the new release by addressing user demand for metrics integration with other metrics collection systems, including Prometheus.

## What is Apache SkyWalking?

SkyWalking is an observability platform and APM tool that works with or without a service mesh, providing automatic instrumentation for microservices, cloud-native and container-based applications. The top-level Apache project is supported by a global community and is used by Alibaba, Huawei, Tencent, Baidu, and scores of others. SkyWalking provides logging, monitoring, and tracing with an architecture that includes a data collection terminal, analysis platform, and UI.

## Notable enhancements:

UI dashboard is 100% configurable to adopt new metrics defined in the backend.
Support for the Prometheus exposition format. Metrics in Prometheus format could be transferred into SkyWalking.
SkyWalking can now monitor the service mesh itself, providing metrics on Istio and Envoy.
The Service, Instance, and Endpoint register mechanism and inventory storage entities are removed.

## Add new metrics to the UI, without changing the source code

For SkyWalking users, the important features of 8.0 will be the upgrade of the data model and propagation format to be more friendly to more languages, and the introduction of MeterSystem, which allows traditional tracing mode to run in conjunction with service mesh mode and allows users to collect custom metrics. Tracing and service mesh are focused on topology and service traffic metrics, but the MeterSystem can report any business metric that's of interest to the user, such as database access performance, for example, or Christmas order rates, or the percentage of users who register or make purchases. Data for that metric would then be represented visually on the SkyWalking UI dashboard. The indicator panel data and topology map can be derived from Envoy's metrics, and the tracing analysis can support Istio's telemetry. The dashboard can import/export through a JSON format and the customizable metrics on the dashboard can be configured with options such as metric name, entity type (service, instance, endpoint or all), label values, etc. The logic and prototype configuration of UI to describe the dashboard, tab, and component are described in the [UI template](https://github.com/apache/skywalking/blob/master/oap-server/server-bootstrap/src/main/resources/ui-initialized-templates.yml#L28).

## Observe any application instrumented with Prometheus

This latest community release also enables SkyWalking to observe any application that has been instrumented with Prometheus or offers a Prometheus endpoint. This will save time for users who want to use SkyWalking for both metrics and tracing, since you can now get Prometheus data without having to re-instrument the metrics piece. Users may opt to use Prometheus because it's an easy, familiar tool, or they may want SkyWalking's high performance distributed analysis features. With 8.0, the Prometheus network protocol can read all the data you've already set up in your API, and metrics in Prometheus format can now be transferred into SkyWalking, so all the metrics and topology can be visualized as a whole piece. Prometheus [fetcher](https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/backend-fetcher.md) is supported.

### Monitor your mesh

SkyWalking can also now be used to monitor not only the services or platform but the mesh itself. With 8.0, you get more metrics about your mesh, including Istio and Envoy. You can also use SkyWalking to monitor its own performance. While the monitoring system observes the business cluster, the monitoring system can be observed at the same time to ensure the operation team has a stable platform.

## Performance enhancement

Finally, the 8.0 release removes the register mechanism, or the need to require a unique number integer to represent and entity. This change will improve performance. A complete list of 8.0 features is available on the SkyWalking community release announcement [page](https://github.com/apache/skywalking/blob/v8.0.0/CHANGES.md).

## Additional resources

-   Read more about the [SkyWalking 8.0 release highlights](https://github.com/apache/skywalking/blob/master/CHANGES.md)
-   Get more SkyWalking updates on [Twitter](https://twitter.com/ASFSkyWalking)
-   Sign up to hear more about SkyWalking and observability from Tetrate.
-   Future SkyWalking releases will add native meter APIs and integration with Micrometer(Sleuth) metrics collection.
