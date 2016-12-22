using System;
using System.Web.Optimization;

namespace Piškvorky_NG
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts/jquery").Include(
                "~/Scripts/jquery-{version}.js")
                .IncludeDirectory("~/Scripts", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/scripts/angular").Include(
                "~/Scripts/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/scripts/jqueryval").Include(
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/scripts/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/site.css",
                "~/Content/css/bootstrap.css")
                .IncludeDirectory("~/Content", "*.css"));
        }
    }
}